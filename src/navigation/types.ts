import { Item } from "../domain/models/Item";

// types.ts veya navigation/types.ts gibi bir dosya oluşturabilirsin
export type RootStackParamList = {
  Root: undefined; // Home ekranı parametre almaz
  ItemDetail: { item: Item }; // ItemDetail ekranı itemId parametresi alır
  // Diğer ekranlar burada tanımlanabilir
};
