import React from 'react'
import useRoute from '../../HookDemo/UseRoute/useRoute'

const Home = () => {
  const {params,navigate,searchParam} = useRoute();
  const [search,setSearch] = searchParam;
  console.log(params);
  console.log(navigate);
  console.log(search);



  return (
    <div>Home</div>
  )
}

export default Home