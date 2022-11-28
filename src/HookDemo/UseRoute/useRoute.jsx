//rafce
import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const useRoute = () => {
    const params = useParams();
    const navigate = useNavigate();
    const searchParam = useSearchParams();




  return {params,navigate,searchParam};
}

export default useRoute