// types.ts veya navigation/types.ts gibi bir dosya oluşturabilirsin
export type RootStackParamList = {
  Home: undefined; // Home ekranı parametre almaz
  ItemDetail: { itemId: number }; // ItemDetail ekranı itemId parametresi alır
  // Diğer ekranlar burada tanımlanabilir
};
