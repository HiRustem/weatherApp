import { React } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { setQuery, setIsLoading, setInfo } from '../store/reducers/WeatherReducer'

import { getWeather } from '../hooks/getWeather'

import MainInfo from './cards/MainInfo'

const SearchBar = () => {

    const dispatch = useDispatch()

    const query = useSelector((state) => state.weather.query)
    const info = useSelector((state) => state.weather.info)

    const queryOnChange = (event) => {
        dispatch(setQuery(event.target.value))
    }

    const getResponse = (res) => {
        dispatch(setInfo(res.data))
        dispatch(setIsLoading(false))
    }

    const catchError = (error) => {
        alert('Не удалось найти город')
        dispatch(setIsLoading(false))
        console.log(error)
    }

    const submit = async () => {
        if (query.trim().length < 2) {
            alert('Слишком короткое название')
        } else {
            dispatch(setIsLoading(true))

            getWeather(query)
                .then(res => getResponse(res))
                .catch(error => catchError(error))
        }
    }

    return (
        <div className='w-1/3 flex flex-col justify-center items-center'>

            <div className={`${Object.keys(info).length > 0 ? 'searchBarAfter' : 'searchBarBefore'} searchBar`}>
                <input className='searchBarInput' type='text' placeholder='Введите город' value={query} onChange={queryOnChange} />

                <button className='searchBarButton' onClick={submit} >Получить</button>
            </div>

            <MainInfo object={info} />
        </div>
    )
}

export default SearchBar