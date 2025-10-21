import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
   Alert,
   Button,
   Card,
   Checkbox,
   FormControl,
   FormControlLabel,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAuthContext } from "../../contexts/authContext";
import { toast } from "sonner";



export const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [showError, setShowError] = useState(false)
   const navigate = useNavigate()
   const {setIsAuth} = useAuthContext()

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };

   const handleMouseUpPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };
   const handleLoginSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(email.length == 0 && password.length == 0 ){
         setShowError(true)
      }
      signInWithEmailAndPassword(auth, email, password)
         .then(async(userCredential) => {
            const user = userCredential.user;
            const token = await user.getIdToken()
            localStorage.setItem("access_token", token)
            setIsAuth(true)
            navigate("/")
            toast.success("Welcome back")
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            toast.error("Email or password is incerrect")
         });
   }
   return (
      <Stack
         height={"100vh"}
         display={"flex"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <Card sx={{ minWidth: 200 }}>
            <Stack
               display={"flex"}
               alignItems={"center"}
               justifyContent={"center"}
               flexDirection={"column"}
               gap={2}
               sx={{ p: 3 }}
            >
               <Typography variant="h5" fontWeight={"bold"}>
                  Login
               </Typography>
               {
                  showError && (
                     <Alert sx={{ width: "100%" }} severity="error">
                        This is an error Alert.
                     </Alert>
                  )
               }

               <form id="loginForm" onSubmit={handleLoginSubmit}>
                  <TextField
                     size="small"
                     fullWidth
                     type="email"
                     id="outlined-basic"
                     label="Email"
                     variant="outlined"
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl sx={{ width: "100%", mt: 2 }}>
                     <InputLabel size="small" htmlFor="outlined-adornment-password">Password</InputLabel>
                     <OutlinedInput
                        fullWidth
                        size="small"
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                 }
                                 onClick={handleClickShowPassword}
                                 onMouseDown={handleMouseDownPassword}
                                 onMouseUp={handleMouseUpPassword}
                                 edge="end"
                              >
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </InputAdornment>
                        }
                        label="Password"
                     />
                  </FormControl>
               </form>
               <Stack direction={"row"} justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
                  <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
                  <Link to={"#"}>
                     forgot password?
                  </Link>
               </Stack>
               <Button type="submit" form="loginForm"  fullWidth variant="outlined">Login</Button>
               <Link to={"/auth/signup"}>
                  Sign up
               </Link>
            </Stack>
         </Card>
      </Stack>
   );
};
