const TableRow = ({book, onEdit, onSave, onCancel, isEditing, editData, onEditChange}) => {
    if(isEditing){
        return(
            <tr>
                <td>{book.id}</td>
                <td>
                    <input
                        type="text"
                        value={editData.firstName}
                        onChange={(e) => onEditChange('firstName', e.target.value)}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={editData.lastName}
                        onChange={(e) => onEditChange('lastName', e.target.value)}
                    />
                </td>
                <td>
                    <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => onEditChange('phone', e.target.value)}
                    />
                </td>
                <td>
                    <button onClick={onSave}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </td>
            </tr>
        );
    }

    return(
        <tr>
            <td>{book.id}</td>
            <td>{book.firstName}</td>
            <td>{book.lastName}</td>
            <td>{book.phone}</td>
            <td>
                <button onClick={() => onEdit(book)}>Edit</button>
            </td>
        </tr>
    )
}

export default TableRow;