import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import options from '../data/options';
import en from '../i18n/en';
import hi from '../i18n/hi';

const SectionEditor = ({ title, fields, onUpdate, onAdd, onRemove, onMove, lang = 'en' }) => {
  const i18n = lang === 'hi' ? hi : en;
  return (
    <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">{title}</h3>
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col sm:flex-row gap-2 items-start group">
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-12 gap-2">
              <input
                type="text"
                value={field.label}
                onChange={(e) => onUpdate(field.id, 'label', e.target.value)}
                className="sm:col-span-4 p-2.5 sm:p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none font-medium text-amber-900"
                placeholder="Label"
              />

              {/* Value input varies by type */}
              {(() => {
                const inferred = (field.label || '').toLowerCase();
                const inferredType = inferred.includes('date') ? 'date' : inferred.includes('time') ? 'time' : 'text';
                const type = field.type || inferredType;
                if (field.type === 'select' || (field.optionsKey)) {
                  const key = field.optionsKey || field.optionsKey === 0 ? field.optionsKey : field.optionsKey;
                  const listKey = field.optionsKey || null;
                  const list = listKey ? options[listKey] : null;
                  // fallback: attempt to infer by label
                  let opts = [];
                  if (list) opts = list;
                  else if ((field.label || '').toLowerCase().includes('marital')) opts = options.maritalStatus;
                  else if ((field.label || '').toLowerCase().includes('blood')) opts = options.bloodGroups;
                  else if ((field.label || '').toLowerCase().includes('complex')) opts = options.complexions;
                  else if ((field.label || '').toLowerCase().includes('relig')) opts = options.religions;
                  else if ((field.label || '').toLowerCase().includes('gender')) opts = options.genders;

                  return (
                    <select
                      value={field.value}
                      onChange={(e) => onUpdate(field.id, 'value', e.target.value)}
                      className="sm:col-span-8 p-2.5 sm:p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      <option value="">--</option>
                      {opts.map(opt => {
                        const optLabel = (i18n.options[listKey] && i18n.options[listKey][opt]) || opt;
                        return <option key={opt} value={opt}>{optLabel}</option>;
                      })}
                    </select>
                  );
                }

                if (field.type === 'date' || type === 'date') {
                  return (
                    <input
                      type="date"
                      value={field.value}
                      onChange={(e) => onUpdate(field.id, 'value', e.target.value)}
                      className="sm:col-span-8 p-2.5 sm:p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  );
                }

                if (field.type === 'time' || type === 'time') {
                  return (
                    <input
                      type="time"
                      value={field.value}
                      onChange={(e) => onUpdate(field.id, 'value', e.target.value)}
                      className="sm:col-span-8 p-2.5 sm:p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  );
                }

                return (
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => onUpdate(field.id, 'value', e.target.value)}
                    className="sm:col-span-8 p-2.5 sm:p-2 border rounded text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder="Value"
                  />
                );
              })()}
            </div>
            
            <div className="flex sm:flex-col gap-2 sm:gap-1 w-full sm:w-auto justify-end opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                    <button 
                        onClick={() => onMove(index, -1)} 
                        disabled={index === 0}
                        className="p-2 sm:p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed border sm:border-0 rounded sm:rounded-none"
                        title="Move Up"
                    >
                        <ArrowUp size={16} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                    <button 
                        onClick={() => onMove(index, 1)} 
                        disabled={index === fields.length - 1}
                         className="p-2 sm:p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed border sm:border-0 rounded sm:rounded-none"
                         title="Move Down"
                    >
                        <ArrowDown size={16} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                </div>
                
                <button
                  onClick={() => onRemove(field.id)}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors border sm:border-0"
                    title="Remove Field"
                >
                  <Trash2 size={16} />
                </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onAdd}
        className="mt-4 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto px-3 py-2 sm:py-1.5 text-sm font-medium text-amber-700 hover:text-amber-900 rounded hover:bg-amber-50 transition-colors"
      >
        <Plus size={16} /> Add Field
      </button>
    </div>
  );
};

export default SectionEditor;
