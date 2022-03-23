//! useMemo  hooku componenti bir kere render eder ve aklında tutar. o componentte bir state değişimi olsa bile tüm sayfayı tekrardan render etmez.
//! genelde api istegi cok olan componentlerde ve form control componentlerde kullanılabilir.
import { useEffect, useMemo, useState } from "react"
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchUsers = () => {
    axios.get("https://6238bcf800ed1dbc5ab6d6a7.mockapi.io/users")
      .then(response => setUsers(response.data))
      .catch(err => console.log(err.message));
  }

  const handleSubmitSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  //! use memo kullanmazsak her inputa giriş yaptıgımızda, ka. tane user var ise o kadar render işlemi yapacak. 
  //!sadece çok büyük datalarda yazılması fayfalı olur.
  // const filteredUsers = users.filter(user => {
  //   console.log("filter function runnig...")
  //   return user.name.toLowerCase().includes(searchText.toLowerCase());
  // })

  //! şimdi sadece searchText değiştiginde bu fonksiyon render edilecek
  const filteredUsers = useMemo(
    () => users.filter(user => {
      console.log("filter function runnig...")
      return user.name.toLowerCase().includes(searchText.toLowerCase());
    }
    ), [searchText]
  )


  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="App">
      <input onChange={handleSubmitSearchText} />
      {filteredUsers ? filteredUsers.map(user => <p key={user.id}>{user.name}</p>) : <p>Loadingg</p>}
    </div>
  );
}

export default App;
