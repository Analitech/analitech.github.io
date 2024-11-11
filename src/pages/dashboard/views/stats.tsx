import { BarChart, LineChart, PieChart } from "@mui/x-charts";

function StatsDashboardPage() {
  return (
    <div className="flex h-full w-full flex-col justify-center overflow-auto bg-slate-100">
      <div className="text-center text-3xl font-bold">Estadisticas</div>
      <div className="flex flex-wrap justify-center gap-6 overflow-auto p-5 max-md:justify-normal">
        <div className="flex h-fit flex-col items-center border text-center">
          Nivel de percepcion de inseguridad hacia los sitios de interes
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
            title=""
          />
        </div>
        <div className="flex h-fit flex-col items-center border text-center">
          Cantidad de emprendimientos creados
          <BarChart
            series={[
              { data: [4, 2, 5, 4, 1], stack: "A", label: "Informal" },
              { data: [2, 8, 1, 3, 1], stack: "A", label: "Formal" },
            ]}
            barLabel={(item, context) => {
              if ((item.value ?? 0) > 10) {
                return "High";
              }
              return context.bar.height < 60 ? null : item.value?.toString();
            }}
            width={600}
            height={300}
          />
        </div>
        <div className="flex h-fit flex-col items-center border text-center">
          Delitos cometidos en el tiempp
          <BarChart
            series={[
              {
                data: [11.9, 40.32, 32.82, 6.66, 65.77],
                stack: "A",
                label: "Robo",
              },
              {
                data: [79.04, 51.9, 110.67, 146.46, 125.0],
                stack: "A",
                label: "Asalto",
              },
              {
                data: [198.84, 35.98, 112.39, 185.18, 150.21],
                stack: "A",
                label: "Fraude",
              },
              {
                data: [170.73, 180.28, 113.53, 63.9, 148.9],
                stack: "A",
                label: "Vandalismo",
              },
              {
                data: [139.19, 164.18, 46.34, 175.74, 162.93],
                stack: "A",
                label: "Otros",
              },
            ]}
            barLabel={(item, context) => {
              if ((item.value ?? 0) > 150) {
                return "High";
              }
              return context.bar.height < 60 ? null : item.value?.toString();
            }}
            width={600}
            height={350}
            yAxis={[{ max: 700, min: 0 }]}
          />
        </div>
        <div className="flex h-fit flex-col items-center border text-center">
          Delitos cometidos en total
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Robo",
                    value: 72.72,
                  },
                  {
                    label: "Asalto",
                    value: 16.38,
                  },
                  {
                    label: "Fraude",
                    value: 3.83,
                  },
                  {
                    label: "Vandalismo",
                    value: 2.42,
                  },
                  {
                    label: "Otros",
                    value: 4.65,
                  },
                ],
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter: (item: { value: number }) => `${item.value}%`,
              },
            ]}
            height={300}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}

export default StatsDashboardPage;
