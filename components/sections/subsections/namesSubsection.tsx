import { facilityType } from "@/datasets/facilities";

interface NameSubSectionTableCellProps {
  bgColor?: string;
  children: React.ReactNode;
}

const TableCell: React.FC<NameSubSectionTableCellProps> = ({
  children,
  bgColor,
}) => {
  return (
    <td
      className="border p-2 w-1/3"
      style={{
        backgroundColor: bgColor ? "var(--" + bgColor + ")" : "transparent",
        color: bgColor ? "white" : "",
        fontWeight: bgColor ? "700" : "",
      }}
    >
      {children}
    </td>
  );
};

interface NameSubSectionItemProps {
  facility: facilityType;
  sentenceUsage: string;
  customSentence?: string;
}

export const NameSubSectionItem: React.FC<NameSubSectionItemProps> = ({
  facility,
  sentenceUsage,
  customSentence,
}) => {
  return (
    <tr>
      <TableCell bgColor={facility.colorBgVarName}>{facility.name}</TableCell>
      <TableCell bgColor={facility.colorBgVarName}>{facility.nameEn}</TableCell>
      <TableCell>
        {customSentence ? customSentence : "Navštívili jsme "} {sentenceUsage}.
      </TableCell>
    </tr>
  );
};

interface NameSubSectionProps {
  children: React.ReactNode;
}

const NameSubSection: React.FC<NameSubSectionProps> = ({ children }) => {
  return (
    <table className="w-full mt-8 mb-5 text-center ">
      <thead className="font-bold">
        <tr>
          <TableCell>Český název</TableCell>
          <TableCell>English name</TableCell>
          <TableCell>Použití ve větě</TableCell>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default NameSubSection;
