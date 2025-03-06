import { FlatList, StyleSheet, View } from "react-native";
import { useApiData } from "../../../hooks/useApiData";
import { Loading } from "../../../components/Loading";
import { Error } from "../../../components/Error";
import { Item } from "../../../domain/models/Item";
import { API_ENDPOINTS } from "../../../constants/apiConstants";
import { ItemCard } from "../../../components/ItemCard";
import { GlobalStateHandler } from "../../../components/GlobalStateHandler";

export const HomeScreen = () => {
  const {
    data: posts,
    loading: getLoading,
    error: getError,
  } = useApiData<Item[]>(API_ENDPOINTS.PRODUCTS, { limit: 10 }, "GET");

  // POST ile veri gönderme
  /*const {
    data: newPost,
    loading: postLoading,
    error: postError,
  } = useApiData<Item>(API_ENDPOINTS.PRODUCTS, undefined, "POST", {
    title: "New Post",
    body: "This is a new post",
    userId: 1,
  });*/

  //if (getLoading || postLoading) return <Loading />;
  // if (postError) return <Error error={postError} />;

  return (
    <GlobalStateHandler data={posts} loading={getLoading} error={getError}>
      <FlatList
        style={styles.flatListStyle}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    </GlobalStateHandler>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
