interface PaginationProps {
  firstPage: boolean;
  lastPage: boolean;
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ firstPage, lastPage, currentPage,  totalPages, onPrevPage, onNextPage }) => {
  return (
    <div className="flex justify-between px-4 pt-5">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
        onClick={() => onPrevPage()}
        disabled={firstPage}
      >Previous</button>

      <div>
        {currentPage}
        {totalPages && "/" + totalPages}
      </div>

      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
        onClick={() => onNextPage()}
        disabled={lastPage}
      >Next</button>
    </div>
  )
}

export default Pagination;