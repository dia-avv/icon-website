import CountUp from "../../../UI/CountUp";
import styles from "./CountUpCard.module.css";

export interface CountUpCardProps {
  amount: number;
  subtitle?: string;
  suffix?: string;
  prefix?: string;
}

export default function CountUpCard({
  amount,
  subtitle,
  suffix = "",
  prefix = "",
}: CountUpCardProps) {
  return (
    <div className={styles.countUpCard}>
      <CountUp end={amount} suffix={suffix} prefix={prefix} />
      <h4>{subtitle}</h4>
    </div>
  );
}
