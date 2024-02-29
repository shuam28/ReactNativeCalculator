import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';



// const App = () => {
//   const [data,setData ]=useState(undefined)


//    const getAPIData = async ()=>{
//   //api call
//   const url = "https://jsonplaceholder.typicode.com/posts/1"; 
//   let result = await fetch(url);
//   result = await result.json
//   setData(result);


//   }
//   useEffect(()=>{
//   getAPIData();
//   },[])

//   return (<view>
//     <text style={{fontSize: 30 }} > API Call</text>
//     {
//     data ? <view>
//       <Text style={{ fontSize: 30 }}>hello</Text>
//       <Text style={{ fontSize: 30 }}>data.id</Text>
//       <Text style={{ fontSize: 30 }}>data.userId</Text>
//       <Text style={{ fontSize: 30 }}>data.title</Text>
//       <Text style={{ fontSize: 30 }}>data.body</Text>
//     </view>:null
// }
//   </view>)
// };



export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{marginTop:30}}
        />
        <Text>by : Shubham Singh Rajawat</Text>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
});
