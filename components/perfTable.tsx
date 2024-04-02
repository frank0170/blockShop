import React from "react";

interface GameSettings {
  Quality: string;
  FPS: string;
}

interface Performance {
  Game: string;
  Settings: GameSettings[];
}

function ObjectTable({ obj }: { obj: Performance }): JSX.Element {
  const { Game, Settings }: Performance = obj;

  return (
    <div className="max-w-4xl px-10">
      <table className="w-full text-sm text-left rtl:text-right dark:text-gray-600 border border-gray-300">
        <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-300 dark:text-gray-600 border-b-2 border-gray-300">
          <tr>
            <th colSpan={2} className="py-2 px-4">
              {Game}
            </th>
          </tr>
        </thead>
        <tbody>
          {Settings.map((setting: GameSettings, index: number) => (
            <tr key={index}>
              {Object.entries(setting).map(
                ([key, value]: [string, string], subIndex: number) => (
                  <React.Fragment key={subIndex}>
                    <td className="py-2 px-4">{key}</td>
                    <td className="py-2 px-4">{value}</td>
                  </React.Fragment>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Component to display tables for each object in the array
function DisplayTables({ array }: any) {
  return (
    <>
      {array.map((obj: any, index: any) => (
        <div key={index}>
          <ObjectTable obj={obj} />
          {index !== array.length - 1 && <div className="my-4" />}
        </div>
      ))}
    </>
  );
}

// App component
function App({ specs }: any) {
  return (
    <div className="flex justify-center items-center h-full my-10">
      <div className="w-full max-w-xl">
        <DisplayTables array={specs} />
      </div>
    </div>
  );
}

export default App;
