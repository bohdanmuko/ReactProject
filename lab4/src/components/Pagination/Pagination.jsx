import "./Pagination.css"

function Pagination({
    currentPage,
    totalTodos,
    limitPerPage,
    onNext,
    onPrev,
    onLimitChange
}) {
    const maxPage = Math.ceil(totalTodos / limitPerPage);
    const startItem = (currentPage - 1) * limitPerPage + 1;
    const endItem = Math.min(currentPage * limitPerPage, totalTodos);

    return (
        <div className="pagination">
            <div className="pagination-info">
                Showing {startItem}-{endItem} of {totalTodos} todos
            </div>

            <div className="pagination-controls">
                <button 
                onClick={onPrev}
                disabled={currentPage === 1}
                className="pagination-btn">
                    Previous
                </button>

                <span className="page-number">
                    Page {currentPage} of {maxPage || 1}
                </span>

                <button
                    onClick={onNext}
                    disabled={currentPage >= maxPage}
                    className="pagination-btn"
                >
                    Next
                </button>
            </div>

            <div className="limit-selector">
                <label>Items per page:</label>
                <select 
                value={limitPerPage}
                onChange={(e) => onLimitChange(Number(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
            </div>
        </div>
    );
}

export default Pagination;