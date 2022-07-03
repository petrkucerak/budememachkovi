import { IconArrowBigDown, IconArrowBottomBar, IconCaretDown } from "@tabler/icons";
import Link from "next/link";

export default function Arrow() {
  return (
    <Link href={"#welcome"}>
      <a className="absolute bottom-4 cursor-pointer animate-bounce">
        <IconCaretDown size={40} stroke={1.5} />
      </a>
    </Link>
  );
}
