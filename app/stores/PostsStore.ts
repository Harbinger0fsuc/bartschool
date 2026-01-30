import type { Post } from "~/types";
import { useDebounceFn } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";

export const usePostsStore = defineStore("postsStore", () => {
  const route = useRoute();
  const router = useRouter();

  const supabase = useSupabaseClient();

  const posts = ref<Post[] | []>([]);
  const loading = ref(false);
  const searchQuery = ref(route.query.searchQuery || "");
  const page = ref(Number(route.query.page) || 1);
  const limit = ref(3);
  const total = ref<number>(0);

  const singlePost = ref<Post | null>(null);
  const singlePostLoading = ref(false);

  const totalPages = computed(() => Math.ceil(total.value / limit.value));

  const fetchPosts = async () => {
    loading.value = true;
    const from = (page.value - 1) * limit.value;
    const to = from + limit.value - 1;
    let query;

    if (searchQuery.value) {
      query = supabase
        .from("posts")
        .select("*", { count: "exact" })
        .ilike("title", `%${searchQuery.value}%`)
        .range(from, to);
    } else {
      query = supabase
        .from("posts")
        .select("*", { count: "exact" })
        .range(from, to);
    }

    const { data, count, error } = await query;

    if (error) {
      console.error(error);
    } else {
      posts.value = data;
      if (count) {
        total.value = count;
      }
    }

    loading.value = false;
  };

  const debouncedFetchPosts = useDebounceFn(fetchPosts, 300);

  const setPage = (pageNumber: number) => {
    page.value = pageNumber;
  };

  watch(searchQuery, (newVal, oldVal) => {
    setPage(1);

    router.push({
      query: {
        ...route.query,
        searchQuery: newVal || undefined, // undefined removes the query if input is empty
      },
    });

    debouncedFetchPosts();
  });

  watch(page, () => {
    fetchPosts();
  });

  const getSinglePost = async (id: number) => {
    singlePostLoading.value = true;

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error.message);

      return;
    }

    singlePost.value = data;
  };

  return {
    searchQuery,
    posts,
    fetchPosts,
    totalPages,
    setPage,
    page,
    singlePost,
    getSinglePost,
  };
});
