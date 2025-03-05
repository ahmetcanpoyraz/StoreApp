import { FlatList, Text, View } from "react-native";
import { useApiData } from "../../../hooks/useApiData";
import { Loading } from "../../../components/Loading";
import { Error } from "../../../components/Error";
import { Item } from "../../../domain/models/Item";
import { API_ENDPOINTS } from "../../../constants/apiConstants";

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
  if (getLoading) return <Loading />;
  if (getError) return <Error error={getError} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};
