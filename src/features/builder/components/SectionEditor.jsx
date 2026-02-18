import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const SectionEditor = ({ title, fields, onUpdate, onAdd, onRemove, onMove }) => {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">{title}</h3>
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-start group">
            <div className="flex-1 grid grid-cols-12 gap-2">
               <input
                type="text"
                value={field.label}
                onChange={(e) => onUpdate(field.id, 'label', e.target.value)}
                className="col-span-4 p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none font-medium text-amber-900"
                placeholder="Label"
              />
              <input
                type="text"
                value={field.value}
                onChange={(e) => onUpdate(field.id, 'value', e.target.value)}
                className="col-span-8 p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="Value"
              />
            </div>
            
            <div className="flex flex-col gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button 
                    onClick={() => onMove(index, -1)} 
                    disabled={index === 0}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move Up"
                >
                    <ArrowUp size={14} />
                </button>
                <button 
                    onClick={() => onMove(index, 1)} 
                    disabled={index === fields.length - 1}
                     className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                     title="Move Down"
                >
                    <ArrowDown size={14} />
                </button>
            </div>

            <button
              onClick={() => onRemove(field.id)}
              className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Remove Field"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onAdd}
        className="mt-4 flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-900 px-3 py-1.5 rounded hover:bg-amber-50 transition-colors"
      >
        <Plus size={16} /> Add Field
      </button>
    </div>
  );
};

export default SectionEditor;
