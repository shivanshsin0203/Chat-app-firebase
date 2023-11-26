
import{Box,Button,Center,Container,HStack,Input,VStack} from "@chakra-ui/react"
import Message from "./Message"
import {signOut,onAuthStateChanged,getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {app} from "./firebase"
import { useEffect, useRef, useState } from "react";
import Page from "./signIn"
import {deleteDoc,setDoc,query,orderBy,onSnapshot,getFirestore,addDoc, collection, serverTimestamp, doc} from "firebase/firestore"
import Get from "./drawer.js"
const auth=getAuth(app);
const db=getFirestore();

const loginHandle=()=>{
  const provider=new GoogleAuthProvider();
  signInWithPopup(auth,provider);
   
}
const logout=()=>{
   signOut(auth);
}
const hideScrollBar = {
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',  // IE and Edge
  'scrollbar-width': 'none',  // Firefox
  overflowY: 'scroll',  // Ensure that scrolling functionality is still available even if scrollbar is hidden
};
function App(){
  const [user,setuser]=useState(false);
  const[message,setMessage]=useState("")
  const[messages,setMessages]=useState([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const[currentLive,SetcurrentLive]=useState([]);
  const [userId, setUserId] = useState(null);
  const scrl=useRef(null);
  const q=query(collection(db,"Messages"),orderBy("createAt","asc"))
  const submitHndler=async(e)=>{
    e.preventDefault();
    try{
      setMessage("");
      await addDoc(collection(db,"Messages"),{
          text:message,
          uid: user.uid,
          uri:user.photoURL,
          createAt:serverTimestamp(),
          unme:user.displayName,
         })
         
         scrl.current.scrollIntoView({behavior:"smooth"})
    }
   catch(error){
      console.log(error);
    }
   }
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, async(currentUser) => {
      
      if (currentUser) {
        const email=""+currentUser.email;
        console.log(email.substring(8));
        if(email.substring(8)==="@nith.ac.in"&&email.substring(0,2)==="22"){
        const userDoc = doc(collection(db, 'onlineUsers'), currentUser.uid);
        setDoc(userDoc, {uid: currentUser.uid, unme:currentUser.displayName, uri:currentUser.photoURL,});
        setuser(currentUser);
        setUserId(currentUser.uid);
        }
        else{
          alert("Only for NITH Sophomore")
          await signOut(auth);
        }
      } else {
        if(userId){
        console.log(user.uid);
        const userDoc = doc(collection(db, 'onlineUsers'),userId);
         deleteDoc(userDoc);
          setuser(false);
        }
    }
    });
    const unmsg=onSnapshot(q,(snap)=>{
       setMessages(
        snap.docs.map((item)=>{
          const id=item.id;
          return {id,...item.data()};
        })
       )
    });
    const unsubs = onSnapshot(collection(db, 'onlineUsers'), snapshot => {
      setOnlineCount(snapshot.size);
  });
  const unlive = onSnapshot(collection(db, 'onlineUsers'),(snap)=>{
        SetcurrentLive(
          snap.docs.map((item)=>{
            const id=item.id;
            return {id,...item.data()};
          })
        )
  });
  return()=>{
      unsubscribe();
      unmsg();
      unsubs();
      unlive();
    };
  }, [userId]);
      console.log(currentLive);
   return <Box >
      {user ? (<Box bg="black"><Container h={"100vh"} bg={"black"}> 
      <VStack h="full" paddingY={"4"} bg="black">
        <HStack>
        <Button alignSelf={"flex-start"} onClick={logout} colorScheme="red" w={"40%"}>
          Logout
        </Button>
        <p style={{color:"green" ,fontSize:"xxl",paddingLeft:"10px",}}></p>
        <Get data={currentLive} number={onlineCount}></Get>
        </HStack>
        <VStack  h={"full"} w={"full"} overflowY={"auto"} overflowX={"auto"} bg="black"sx={hideScrollBar}>
          {
            messages.map(item=>(
              <Message user={item.uid===user.uid?"me":"other"}text={item.text} uri={item.uri} key={item.id} name={item.unme}></Message>
            ))
          }
          <div ref={scrl}></div>
      </VStack>
         
         <form onSubmit={submitHndler}style={{width:"100%"}}>
           <HStack>
            <Input color="white"value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Enter a message..."></Input>
            <Button colorScheme="purple" type="Submit">Submit</Button>
           </HStack>
         </form>
      </VStack>
      </Container></Box>):
        <Page SignIn={loginHandle}/>}
  </Box>
 
}
export default App;