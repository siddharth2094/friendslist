import React, { useEffect, useState } from 'react'
import '../App.scss';
import Fav from "../favourite.png";
import NoFav from "../star.png";
import Del from "../bin.png";
import {Paginate} from '../pagination';

function FriendList() {

    const [searchFriends, setSearchFriends] = useState("")
    const [filterDataMain, setFilterData] = useState([])
    const [friendsList, setFriendList] = useState([])

    const [selectedPage, selectPage] = useState(0)

    const searchAddFriends = (e) => {
        const { value } = e.target;
        setSearchFriends(value);
    }

    useEffect(() => {
        setFilterData(friendsList);
    }, [])

    useEffect(() => {
        let value = searchFriends;
        if (value.length > 0) {
            let data = friendsList;
            let filterData = data.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            setFriendList(filterData);
        } else if (value.length == 0) {
            if (filterDataMain.length > 0) {
                setFriendList(filterDataMain);
            }
        }
    }, [searchFriends])

    const onEnter = (event) => {
        const { value } = event.target
        if (event.charCode === 13 && value.length > 0) {
            let add = {
                name: searchFriends,
                isFav: false,
                id: Math.floor(Math.random() * 100)
            }
            selectPage(0)
            filterDataMain.unshift(add);
            setFriendList(filterDataMain);
            setSearchFriends("")
        }
    }

    const showDelPop = (e, id) => {
        console.log(id, 'id')
        let newData = friendsList.filter(item => item.id !== id);
        console.log(newData)
        if(!newData.length) {
            setFilterData([])
        }
        setFriendList(newData)
    }

    const addFav = (e, index) => {

        let fav = friendsList[index];
        fav.isFav = true;
        let newData = friendsList.filter(item => {
            return friendsList[index] != item
        });
        newData.unshift(fav);
        selectPage(0)
        setFriendList(newData);
    }

    const handlePageClick = (page) => {
        console.log(page)
        selectPage(page.selected)
    }

    

    return (
        <div className="friendsList_container">
            <div className="main_container">
            <div className="friend_list">
                <h3>Friends List</h3>
                <div className="input">
                    <input type="text" placeholder="Enter Your's Friend Name" value={searchFriends} onChange={searchAddFriends} onKeyPress={onEnter} />
                </div>
                <ul>
                    {friendsList && friendsList
                    // .slice(selectedPage * 4, selectedPage * 4 + 4)
                    .map((item, index) => {
                        return (
                            <li key={item.id}>
                                <span>
                                    {item.name}
                                    <span>is your Friend</span>
                                </span>
                                <span className="buttons">
                                    {item.isFav ? (
                                        <img src={Fav} onClick={(e) => addFav(e, item.id)} />
                                    ) : <img src={NoFav} onClick={(e) => addFav(e, item.id)} />}

                                    <img src={Del} onClick={(e) => showDelPop(e, item.id)} />
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        {/* <div className="pagination-buttons">
            <button type="button" className="page-btn start-page">start</button>
            <button type="button" className="page-btn previous-page">previous</button>
            <button type="button" className="page-btn active">1</button>
            <button type="button" className="page-btn">2</button>
            <button type="button" className="page-btn next-page">next</button>
            <button type="button" className="page-btn end-page">end</button>
        </div> */}
        {/* <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          forcePage={selectedPage}
        //   breakClassName={'break-me'}
          pageCount={friendsList.length ? Math.ceil(((friendsList.length - 1 ) +1)/4) : 1}
          marginPagesDisplayed={10}
        //   pageRangeDisplayed={friendsList.length}
          onPageChange={handlePageClick}
        nextClassName="page-btn next-page"
        previousClassName="page-btn previous-page"
          containerClassName={'pagination-buttons'}
          activeClassName={'page-btn active'}
        /> */}
        
        </div>
    );
}

export default FriendList;
