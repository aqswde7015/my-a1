import React from 'react';

const AddTAsk = (props) => {
    return (
        <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Tiêu đề việc cần làm ..."
          value={props.new}
          onChange={(e) => props.func(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-green font-bold py-2 px-4 rounded-md"
          onClick={props.add}
        >
          Thêm mới
        </button>
      </div>
    );
};

export default AddTAsk;