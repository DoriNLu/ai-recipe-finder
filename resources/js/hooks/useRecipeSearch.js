import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useRecipeSearch(prompt, blacklist = []) {
  const enabled = !!prompt;

  const fetchRecipes = async () => {
    const response = await axios.post('/ai-generate', {
      ingredients: prompt,
      blacklist,
    });

    return response.data.recipes;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['recipes', prompt, blacklist],
    queryFn: fetchRecipes,
    enabled,
    staleTime: 0,
  });

  return {
    data,
    isLoading,
    error,
  };
}
