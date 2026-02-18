import React from 'react';

const BiodataPreview = ({ data, background }) => {
  const bgClass = background?.class || 'bg-white';

  return (
    <div className="preview-container bg-gray-500 p-8 min-h-screen overflow-auto flex justify-center items-start">
        {/* Inline styles to match the original HTML exactly, scoped to this component if needed, 
            but here we use the exact classes and a style tag for print fidelity. 
        */}
      <style>{`
        .biodata-page {
            width: 800px; /* Fixed width for A4-like appearance */
            margin: auto;
            background-color: ${background?.value === 'none' ? '#fff' : 'transparent'};
            background-image: ${background?.value !== 'none' ? background.value : 'none'};
            background-size: ${background?.size || 'auto'};
            border: 8px solid #c89b2b;
            padding: 40px 60px;
            position: relative;
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            font-family: "Segoe UI", Tahoma, sans-serif;
            color: #333;
            box-sizing: border-box;
        }

        .border-decoration {
            border: 2px solid #c89b2b;
            padding: 30px;
        }

        .center {
            text-align: center;
        }

        .ganesh {
            width: 80px;
            margin: 0 auto 10px auto; /* Centering for block-level image (Tailwind reset) */
            display: block;
        }

        h1 {
            font-size: 22px;
            color: #a67c00;
            margin: 5px 0;
            font-weight: bold;
            letter-spacing: 1px;
            text-align: center;
        }

        h2 {
            font-size: 18px;
            color: #a67c00;
            margin-top: 25px;
            margin-bottom: 10px;
            font-weight: bold;
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 16px;
        }

        td {
            padding: 6px 0;
            vertical-align: top;
        }

        td.label {
            width: 35%;
            font-weight: 600;
            color: #5a4a2a;
        }

        td.colon {
            width: 5%;
            text-align: center;
        }

        td.value {
            width: 60%;
            color: #333;
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
                min-h: auto;
                display: block;
            }
            .biodata-page {
                box-shadow: none;
                border: 8px solid #c89b2b !important; /* Ensure border prints */
                width: 100%;
                margin: 0;
                page-break-after: always;
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
