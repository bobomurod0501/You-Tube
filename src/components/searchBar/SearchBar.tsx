import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router';




const SearchBar = () => {
   const [searchVal, setSearchVal] = useState<string>("")
   const navigate = useNavigate()

   const submitFunc = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(searchVal.trim()){
         navigate(`/search/${searchVal.toLocaleLowerCase()}`)
      }else {
         navigate("/")
      }
      setSearchVal("")
   }
   return (
      <Paper
         component="form"
         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
         onSubmit={submitFunc}
      >
         <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search videos..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(e) => setSearchVal(e.target.value)}
         />
         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
         </IconButton>
      </Paper>
   )
}

export default SearchBar
