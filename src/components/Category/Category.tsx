import { Stack } from '@mui/material';
import "./category.css"
import { categories } from './categoryData';
import { useThemeContext } from '../../contexts/ThemeContext';

interface Props {
  selectedCategory:string,
  setSelectedCategory:(value:string) => void
}

const Category = ({ setSelectedCategory, selectedCategory }: Props) => {
  const {mode} = useThemeContext()
  const handeSelectFunc = (name:string) => {
    setSelectedCategory(name)
  }
  return (
    <Stack direction={"row"} spacing={1} p={1} sx={{overflowX:"auto", }}>
      {
        categories?.map((item) => {
          return (
            <button className={`${mode} ${selectedCategory == item.name ? "selected" : ""}`} onClick={() => handeSelectFunc(item.name)} key={item.id}><span>{item.icon}</span>{item.name}</button>
          )
        })
      }
    </Stack>
  )
}

export default Category
