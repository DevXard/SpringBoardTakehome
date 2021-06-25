import {useState, useEffect} from 'react'

const Search = ({search}) => {

    const [formData, setFormData] = useState('')

    useEffect(() =>{
        search(formData)
    },[formData])

    function handleChange(e){
        setFormData(e.target.value)
        
    }
    return (
        <div>
            <form>
                <input className="w-full focus:outline-none focus:ring-none ring-1 pl-3 rounded"
                placeholder="Search by name"
                type="text"
                value={formData}
                onChange={handleChange}
                />
            
            </form>
        </div>
    )
}

export default Search;