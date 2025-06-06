import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { MainLayout } from './layouts';
import { Home, NotFound, PokemonList } from './pages';
import { getPokemon } from './data';
import { ErrorElement, Loading } from './components';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path='pokemon'
          loader={getPokemon}
          hydrateFallbackElement={<Loading message='Loading Pokémon' />}
          element={<PokemonList />}
          errorElement={<ErrorElement />}
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
