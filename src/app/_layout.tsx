// Rotas da aplicação
import { Stack } from "expo-router"

// Importando os temas dentro do arquivo em styles
import { colors } from "@/styles/theme"

// Fontes
import { Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, useFonts } from "@expo-google-fonts/rubik"

// components
import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.gray[100] } }} />
  )
}