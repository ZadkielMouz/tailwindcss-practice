import { AppLayout } from "./layout"
import { AppRouter } from "./router/AppRouter"


export const App = () => {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}
