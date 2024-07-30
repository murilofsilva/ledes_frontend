import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import MovimentacoesModal from '../movimentacoesModal/MovimentacoesModal';
import './timeline.css';

const Timeline = ({ items = [], onEdit, onDelete }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (mov) => {
    setSelectedItem(mov);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    onDelete(id);
    setIsModalOpen(false);
  };

  const handleSave = (updatedMov) => {
    onEdit(updatedMov);
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="timeline-container">
      <ul className="timeline">
        {items.map((item, index) => (
          <li key={index} className="timeline-item">
            <div
              className={`timeline-marker ${selectedItem && selectedItem.id === item.id ? 'highlighted' : ''}`}
            >
              <FontAwesomeIcon icon={faGavel} />
            </div>
            <div className="timeline-content">
              <p className="title">{item.titulo}</p>
              <p className="description">{item.descricao}</p>
              <br />
              <span>{new Date(item.data).toLocaleDateString()}</span>
            </div>
            <button className="edit-button" onClick={() => handleEditClick(item)}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="delete-button" onClick={() => handleDeleteClick(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && selectedItem && (
        <MovimentacoesModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onSave={handleSave}
          movimentacao={selectedItem}
        />
      )}
    </div>
  );
};

export default Timeline;