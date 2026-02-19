import React from 'react';

const BiodataPreview = ({ data, background }) => {
  const bgClass = background?.class || 'bg-white';

  return (
    <div className="preview-container bg-gray-500 p-4 sm:p-8 min-h-screen overflow-auto flex justify-center items-start">
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

          <h2>PERSONAL DETAILS</h2>
          <table>
            <tbody>
              {data.personalDetails.map((field) => (
                <tr key={field.id}>
                  <td className="label">{field.label}</td>
                  <td className="colon">:</td>
                  <td className="value">{field.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>FAMILY DETAILS</h2>
          <table>
            <tbody>
              {data.familyDetails.map((field) => (
                <tr key={field.id}>
                  <td className="label">{field.label}</td>
                  <td className="colon">:</td>
                  <td className="value">{field.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>CONTACT DETAILS</h2>
          <table>
             <tbody>
              {data.contactDetails.map((field) => (
                <tr key={field.id}>
                  <td className="label">{field.label}</td>
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
