import { useState } from 'react';
import AddForm from './AddForm';
import SearchBox from './SearchBox';
import BooksTable from './BooksTable';

const AddressBook = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});

    const handleAdd = (formData) => {
        const newBook = {
        id: Date.now(),
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim()
        };
    
        setBooks([...books, newBook]);
    };

  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditData({ ...book });
  };

  const handleSave = (id) => {
    if (!editData.firstName.trim() || !editData.lastName.trim() || !editData.phone.trim()) {
      return;
    }
    
    setBooks(books.map(book => 
      book.id === id ? { ...editData } : book
    ));
    setEditingId(null);
    setEditData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleEditChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const filteredBooks = books.filter(book =>
    book.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.phone.includes(searchTerm)
  );

  return (
    <div>
      <h1>Address Book</h1>
      
      <AddForm onAdd={handleAdd} />
      
      <hr />
      
    <SearchBox value={searchTerm} onChange={setSearchTerm} />
      
      <hr />
      
      <BooksTable
        books={filteredBooks}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
        editingId={editingId}
        editData={editData}
        onEditChange={handleEditChange}
      />
    </div>
  );
};

export default AddressBook;