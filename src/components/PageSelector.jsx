import { useState } from "react";

function PageSelector({ onSelect }) {

    const [selectedPage, setSelectedPage] = useState(1);

    const handlePageClick = (numberPage) => {
        console.log(numberPage);

        setSelectedPage(numberPage);
        onSelect(numberPage);
    };

    return (
        <div className="join flex items-center justify-center">

            {selectedPage >= 2 && (
                <button className="join-item btn"
                    onClick={() => handlePageClick(selectedPage - 1)}
                >
                    <svg className="h-6 w-6 fill-current md:h-8 md:w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
                </button>
            )}

            <button className="join-item btn">Page {selectedPage}</button>
            <button className="join-item btn"
                onClick={() => handlePageClick(selectedPage + 1)}
            >
                <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
            </button>
        </div>
    )
}

export default PageSelector;