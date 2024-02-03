import { Card, Typography } from "@material-tailwind/react";
import MainTitle from "./MainTitle";
const TABLE_HEAD = ["Features", "Basic", "Popular", "Premium"];

const TABLE_ROWS = [
  {
    name: "Price",
    job: "$10.99/Month",
    date: "$12.99/Month",
    price: "$14.99/Month",
  },
  {
    name: "Price",
    job: "$10.99/Month",
    date: "$12.99/Month",
    price: "$14.99/Month",
  },
  {
    name: "Price",
    job: "$10.99/Month",
    date: "$12.99/Month",
    price: "$14.99/Month",
  },
  {
    name: "Price",
    job: "$10.99/Month",
    date: "$12.99/Month",
    price: "$14.99/Month",
  },
  {
    name: "Price",
    job: "$10.99/Month",
    date: "$12.99/Month",
    price: "$14.99/Month",
  },
  {
    name: "Price",
    job: "$10.99/Month",
    date: "$12.99/Month",
    price: "$14.99/Month",
  },
];

const Table = () => {
  return (
    <div className="container pb-[150px]">
      <MainTitle
        h2={"Compare our plans and find the right one for you"}
        p={
          "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
        }
      />
      <Card className="h-full w-full rounded-lg overflow-scroll sm:overflow-auto">
        <table className="w-full min-w-max  table-auto text-left border border-[#262626]">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-[#262626] bg-[#111] p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none ">
                    <h3> {head}</h3>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#141414] ">
            {TABLE_ROWS.map(({ name, job, date, price }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4";

              return (
                <tr className="border border-[#262626]" key={name}>
                  <td className={`${classes} border border-[#262626]`}>
                    <p>{name}</p>
                  </td>
                  <td className={`${classes} border border-[#262626]`}>
                    <p>{job}</p>
                  </td>
                  <td className={`${classes} border border-[#262626]`}>
                    <p>{job}</p>
                  </td>
                  <td className={`${classes} border border-[#262626]`}>
                    <p>{price}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
