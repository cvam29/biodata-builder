import React from 'react';
import en from '../i18n/en';
import hi from '../i18n/hi';
import options from '../data/options';

const BiodataPreview = ({ data, background, lang = 'en' }) => {
    const i18n = lang === 'hi' ? hi : en;
  const bgClass = background?.class || 'bg-white';

    return (
        <div role="document" aria-label="Biodata preview" className="preview-container bg-gray-500 p-4 sm:p-8 min-h-screen overflow-auto flex justify-center items-start print:block print:overflow-visible print:p-0 print:bg-transparent print:min-h-0">
        {/* Inline styles to match the original HTML exactly, scoped to this component if needed, 
            but here we use the exact classes and a style tag for print fidelity. 
        */}
      <style>{`
        .biodata-page {
            width: 100%; /* Responsive width */
            max-width: 800px; /* Max width for A4-like appearance */
            margin: auto;
            ${background?.value === 'none' ? 'background-color: #fff;' : ''}
            background-image: ${background?.value !== 'none' ? background?.value ?? 'none' : 'none'};
            background-size: ${background?.size || 'auto'};
            border: 6px solid #c89b2b;
            padding: 20px 30px;
            position: relative;
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            font-family: "Segoe UI", Tahoma, sans-serif;
            color: #333;
            box-sizing: border-box;
        }

        @media (min-width: 640px) {
            .biodata-page {
                border-width: 8px;
                padding: 40px 60px;
            }
        }

        .border-decoration {
            border: 2px solid #c89b2b;
            padding: 20px;
        }

        @media (min-width: 640px) {
            .border-decoration {
                padding: 30px;
            }
        }

        .center {
            text-align: center;
        }

        .ganesh {
            width: 60px;
            margin: 0 auto 8px auto; /* Centering for block-level image */
            display: block;
        }

        @media (min-width: 640px) {
            .ganesh {
                width: 80px;
                margin-bottom: 10px;
            }
        }

        .biodata-page h1 {
            font-size: 18px;
            color: #a67c00;
            margin: 5px 0;
            font-weight: bold;
            letter-spacing: 1px;
            text-align: center;
        }

        @media (min-width: 640px) {
            .biodata-page h1 {
                font-size: 22px;
            }
        }

        .biodata-page h2 {
            font-size: 16px;
            color: #a67c00;
            margin-top: 20px;
            margin-bottom: 8px;
            font-weight: bold;
            text-align: center;
        }

        @media (min-width: 640px) {
            .biodata-page h2 {
                font-size: 18px;
                margin-top: 25px;
                margin-bottom: 10px;
            }
        }

        .biodata-page table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }

        @media (min-width: 640px) {
            .biodata-page table {
                font-size: 16px;
            }
        }

        .biodata-page td {
            padding: 5px 0;
            vertical-align: top;
        }

        @media (min-width: 640px) {
            .biodata-page td {
                padding: 6px 0;
            }
        }

        .biodata-page td.label {
            width: 40%;
            font-weight: 600;
            color: #5a4a2a;
            word-wrap: break-word;
        }

        @media (min-width: 640px) {
            .biodata-page td.label {
                width: 35%;
            }
        }

        .biodata-page td.colon {
            width: 5%;
            text-align: center;
        }

        .biodata-page td.value {
            width: 55%;
            color: #333;
            word-wrap: break-word;
        }

        @media (min-width: 640px) {
            .biodata-page td.value {
                width: 60%;
            }
        }

        @media print {
            body { 
                background: none; 
                -webkit-print-color-adjust: exact; 
                print-color-adjust: exact;
            }
            .preview-container { 
                padding: 0; 
                background: none; 
                min-height: auto;
                display: block;
            }
            .biodata-page {
                box-shadow: none;
                border: 8px solid #c89b2b !important; /* Ensure border prints */
                width: 100%;
                max-width: 100%;
                margin: 0;
                padding: 40px 60px;
                page-break-after: always;
            }
            .border-decoration {
                padding: 30px;
            }
            .biodata-page table {
                font-size: 16px;
            }
            .ganesh {
                width: 80px;
            }
            .biodata-page h1 {
                font-size: 22px;
            }
            .biodata-page h2 {
                font-size: 18px;
            }
            /* Hide UI elements */
            .no-print { display: none !important; }
        }
      `}</style>
      
      <div className={`biodata-page ${bgClass}`} id="biodata-preview">
        <div className="border-decoration">
          <div className="center">
            <img src="https://englishbiodata.com/images/latest/gods/1.png" className="ganesh" alt="Ganesh" />
            <h1>|| SHRI GANESHAY NAMAH: ||</h1>
          </div>

                    <h2>{i18n.headings.personal}</h2>
          <table>
            <tbody>
                            {data.personalDetails.map((field) => {
                                const label = (i18n.labels && i18n.labels[field.label]) || field.label;
                                // translate value for select fields
                                let value = field.value;
                                const key = field.optionsKey || null;
                                if (key && i18n.options && i18n.options[key] && value) {
                                    value = i18n.options[key][value] || value;
                                } else if (value && (field.type === 'date' || (field.label || '').toLowerCase().includes('date'))) {
                                    // keep as-is (ISO date) or format
                                } else if (value && (field.type === 'time' || (field.label || '').toLowerCase().includes('time'))) {
                                    // keep as-is
                                } else {
                                    // try to infer option lists by label
                                    const l = (field.label || '').toLowerCase();
                                    if (l.includes('marital')) value = (i18n.options && i18n.options.maritalStatus && i18n.options.maritalStatus[value]) || value;
                                    if (l.includes('blood')) value = (i18n.options && i18n.options.bloodGroups && i18n.options.bloodGroups[value]) || value;
                                    if (l.includes('complex')) value = (i18n.options && i18n.options.complexions && i18n.options.complexions[value]) || value;
                                    if (l.includes('relig')) value = (i18n.options && i18n.options.religions && i18n.options.religions[value]) || value;
                                    if (l.includes('gender')) value = (i18n.options && i18n.options.genders && i18n.options.genders[value]) || value;
                                }
                                return (
                                    <tr key={field.id}>
                                        <td className="label">{label}</td>
                                        <td className="colon">:</td>
                                        <td className="value">{value}</td>
                                    </tr>
                                );
                            })}
            </tbody>
          </table>

                    <h2>{i18n.headings.family}</h2>
          <table>
            <tbody>
                            {data.familyDetails.map((field) => (
                                <tr key={field.id}>
                                    <td className="label">{(i18n.labels && i18n.labels[field.label]) || field.label}</td>
                                    <td className="colon">:</td>
                                    <td className="value">{field.value}</td>
                                </tr>
                            ))}
            </tbody>
          </table>

                    <h2>{i18n.headings.contact}</h2>
          <table>
             <tbody>
              {data.contactDetails.map((field) => (
                <tr key={field.id}>
                                    <td className="label">{(i18n.labels && i18n.labels[field.label]) || field.label}</td>
                  <td className="colon">:</td>
                  <td className="value">{field.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BiodataPreview;
