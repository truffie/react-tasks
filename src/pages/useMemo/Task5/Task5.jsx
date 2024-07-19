import { useState, useMemo, useEffect } from "react";
import axios from "axios";

export function Task5() {
  const [ipAddress, setIpAddress] = useState("");

  const fetchIp = async () => {
    try {
      const response = await axios.get("https://api.ipify.org/?format=json");
      setIpAddress(response.data.ip);
    } catch (error) {
      console.error("Error fetching the IP address:", error);
      return "Can't fetch IP";
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  const memoIpAddress = useMemo(() => ipAddress, [ipAddress]);

  return (
    <>
      <h2>
        5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес должен быть получен с использованием
        useMemo при монтировании компонента и кэширован для избегания повторных запросов к API при обновлении других
        частей компонента. https://api.ipify.org/?format=json
      </h2>
      <div>
        <h1>{memoIpAddress || "Загрузка..."}</h1>
      </div>
    </>
  );
}
