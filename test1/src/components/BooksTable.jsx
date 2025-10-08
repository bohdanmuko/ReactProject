import TableRow from "./TableRow";

const BooksTable = ({ books, onEdit, onSave, onCancel, editingId, editData, onEditChange }) => {
  if (books.length === 0) {
    return <div>No data to display</div>;
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <TableRow
            key={book.id}
            book={book}
            onEdit={onEdit}
            onSave={() => onSave(book.id)}
            onCancel={onCancel}
            isEditing={editingId === book.id}
            editData={editData}
            onEditChange={onEditChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;