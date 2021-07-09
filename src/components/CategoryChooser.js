import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'; // node_modules
import { shortcutsAtom, categoryAtom } from '../atoms'; // user defined in /src
import styled from 'styled-components';
/*
  useRecoilState    = (atom) => [value, setterFn] // returns value and setter (similar to useState)
  useRecoilValue    = (atom) => value             // only returns value ONLY
  useSetRecoilState = (atom) => setterFn          // only returns setterFn ONLY
*/
const CategoryButton = styled.button`
  padding: 8px;
`;

export default function CategoryChooser(props) {
  const shortcuts = useRecoilValue(shortcutsAtom);
  const setCategory = useSetRecoilState(categoryAtom);

  const categories = shortcuts.reduce((acc, shortcut) => {
    const currentCategories = [...acc];
    if (acc.indexOf(shortcut.category) === -1) {
      currentCategories.push(shortcut.category);
    }
    return currentCategories;
  }, [])

  const onChooseCategory = (category) => {
    setCategory(category);
  };

  return (
    <div>
      {categories.map(c => (
        <CategoryButton key={c} onClick={() => onChooseCategory(c)}>{c}</CategoryButton>
      ))}
    </div>
  )
}
