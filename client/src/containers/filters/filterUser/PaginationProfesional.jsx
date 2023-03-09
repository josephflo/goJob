import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { configFilterUserPut } from '../../../redux/actions/users/profesionales';

const PaginationProfesional = () => {
  let configFilterUser = useSelector((state) => state.configFilterUser);
  const usersProfesionales = useSelector((state) => state.usersProfesionales);

  let [arrayPages, setArrayPages] = useState([])

  let dispatch = useDispatch()

  let [actualPage, setActualPage] = useState(configFilterUser.page)

  const previusPage = (actualPage)=>{
    if(actualPage <= 1) return false

    setActualPage(Number(actualPage) - 1)

    dispatch(configFilterUserPut({
      ...configFilterUser,
      page: Number(actualPage) - 1
    }))

  }

  const nextPage = (actualPage)=>{
    if(actualPage >= usersProfesionales.totalPages) return false

    setActualPage(Number(actualPage) + 1)

    dispatch(configFilterUserPut({
      ...configFilterUser,
      page: Number(actualPage) + 1
    }))
  }


  const changePage = (newPage)=>{
    setActualPage(Number(newPage))

    dispatch(configFilterUserPut({
      ...configFilterUser,
      page: Number(newPage)
    }))
  }

  useEffect(()=>{
    if(usersProfesionales.totalPages){
      let newArray = []
      for (let i = 1; i <= usersProfesionales.totalPages; i++) {
        newArray.push(Number(i))
      }

      setArrayPages(newArray)
    }
  }, [usersProfesionales])



  let clasePage =  "cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

  let clasePageSelect = "cursor-pointer px-3 py-2 leading-tight text-white bg-slate-600 border border-gray-400 hover:bg-slate-500 hover:text-white dark:bg-gray-300 dark:border-gray-300 dark:text-black dark:hover:bg-gray-1000 dark:hover:text-white"
  return (
    <>
      {/* {usersProfesionales && usersProfesionales.totalPages && (
        <span class="text-sm text-gray-700 dark:text-gray-400 mb-1	">
          Pagina <span class="font-semibold text-gray-900 dark:text-white">{`${actualPage} de ${usersProfesionales.totalPages}`}</span>
        </span>
      )} */}

      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a className="block cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-slate-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg onClick={()=>previusPage(actualPage)} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>


        {usersProfesionales.totalPages && arrayPages.length? (arrayPages.map((ele, i)=>
            <li>
              <a onClick={()=>changePage(ele)} key={i} className={ele == actualPage?clasePageSelect:clasePage}>{ele}</a>
            </li>
        )):(
          <li>
            <a  className={clasePageSelect}>1</a>
          </li>
        )}


  
          <li>
            <a className="block cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-slate-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span  className="sr-only">Next</span>
              <svg onClick={()=>nextPage(actualPage)} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
        </ul>
      </nav>
    </>


  )
}

export default PaginationProfesional;
