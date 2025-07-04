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
    <div className="flex justify-between items-center px-2 pt-5">
      <button 
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
        onClick={() => onPrevPage()}
        disabled={firstPage}
      >Previous</button>

      <div className="text-gray-200">
        {currentPage}
        {totalPages && " / " + totalPages}
      </div>

      <button 
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
        onClick={() => onNextPage()}
        disabled={lastPage}
      >Next</button>
    </div>
  )
}

export default Pagination;