import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ImportComponent = () => {
  const [region, setRegion] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [importedData, setImportedData] = useState([]);
  const [allData, setAllData] = useState([]);

  const mockArr = [
    {
      id: 1,
      subsidiary: 1020,
      revisionDate: "07.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700000506",
      objectName: "Скважина 15507 куст 11",
      inventoryNumber: "IB10200000000700000506",
      note: null,
    },
    {
      id: 2,
      subsidiary: 1020,
      revisionDate: "07.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700000507",
      objectName: "Скважина 15535 куст 11",
      inventoryNumber: "IB10200000000700000507",
      note: null,
    },
    {
      id: 3,
      subsidiary: 1020,
      revisionDate: "07.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700000508",
      objectName: "Скважина 15479 куст 11",
      inventoryNumber: "IB10200000000700000508",
      note: null,
    },
    {
      id: 4,
      subsidiary: 1020,
      revisionDate: "07.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700000537",
      objectName: "Скважина 15505 куст 11",
      inventoryNumber: "IB10200000000700000537",
      note: null,
    },
    {
      id: 5,
      subsidiary: 1020,
      revisionDate: "04.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700000791",
      objectName: "Скважина № 15222б куст 11Б",
      inventoryNumber: "IB10200000000700000791",
      note: null,
    },
    {
      id: 6,
      subsidiary: 1020,
      revisionDate: "07.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700001160",
      objectName: "Скважина 15477 куст 11",
      inventoryNumber: "IB10200000000700001160",
      note: null,
    },
    {
      id: 7,
      subsidiary: 1020,
      revisionDate: "28.05.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700001685",
      objectName: "Скважина 29493 куст 130 Приобское месторождение",
      inventoryNumber: "IB10200000000700001685",
      note: "№ скважины нанесен",
    },
    {
      id: 8,
      subsidiary: 1020,
      revisionDate: "29.05.2024",
      eventID: "04",
      eventName: "Ликвидация",
      objectCode: "IB10200000000700001814",
      objectName: "Скважина 257 Куст 24.1 Приобское месторождение",
      inventoryNumber: "IB10200000000700001814",
      note: null,
    },
    {
      id: 9,
      subsidiary: 1020,
      revisionDate: "07.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700002523",
      objectName: "Скважина 15534 куст 11",
      inventoryNumber: "IB10200000000700002523",
      note: null,
    },
    {
      id: 10,
      subsidiary: 1020,
      revisionDate: "04.06.2024",
      eventID: "01",
      eventName: "Нанесение инвентарных номеров",
      objectCode: "IB10200000000700004379",
      objectName: "Скважина №63ВЗПР куст 108 Приобское месторождение",
      inventoryNumber: "IB10200000000700004379",
      note: null,
    },
  ];
  const mockData = {
    1: {
      A: mockArr,
      B: mockArr,
    },
    2: {
      A: mockArr,
      C: mockArr,
    },
    3: {
      B: mockArr,
    },
  };

  // // Функция для получения всех моковых данных
  // const getAllMockData = () => {
  //   const allData = [];
  //   for (const region in mockData) {
  //     for (const warehouse in mockData[region]) {
  //       allData.push(
  //         ...mockData[region][warehouse].map((item) => ({
  //           ...item,
  //           region,
  //           warehouse,
  //         }))
  //       );
  //     }
  //   }
  //   return allData;
  // };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleWarehouseChange = (event) => {
    setWarehouse(event.target.value);
  };

  const handleImport = (event) => {
    event.preventDefault();
    if (
      region &&
      warehouse &&
      mockData[region] &&
      mockData[region][warehouse]
    ) {
      const exampleImportedData = mockData[region][warehouse].map((item) => ({
        ...item,
        event: "",
        notes: "",
      }));
      setImportedData(exampleImportedData);
    } else {
      setImportedData([]);
    }
  };

  const handleEventChange = (id, event) => {
    setImportedData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, event: event.target.value } : item
      )
    );
  };

  const handleNotesChange = (id, event) => {
    setImportedData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, notes: event.target.value } : item
      )
    );
  };

  const handleSave = () => {
    setAllData((prevData) => [...prevData, ...importedData]);
    setImportedData([]);
  };

  const handleUpdateFromERP = () => {
    // Логика для обновления данных из ERP с временной меткой
    console.log("Обновление данных из ERP с временной меткой");
  };

  const handleUpdateToERP = () => {
    // Логика для обновления данных в ERP как итог ревизии
    console.log("Обновление данных в ERP как итог ревизии");
  };

  const handleUpdateReferences = () => {
    // Логика для обновления справочников
    console.log("Обновление справочников");
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center">
          Импорт данных
        </Typography>

        <div style={{ display: "flex", gap: 10 }}>
          <TableContainer
            component={Paper}
            style={{ marginTop: "20px", flex: 1 }}
          >
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                gap: 10,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateFromERP}
              >
                Сохранить
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateToERP}
              >
                Экспорт данных в ERP
              </Button>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateReferences}
              >
                Обновление справочников
              </Button> */}
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Дочернее общество",
                    "Дата ревизии",
                    "ID мероприятия",
                    "Наименование мероприятия",
                    "Код объекта",
                    "Наименование объекта",
                    "Инвентарный номер",
                    "Примечание",
                  ].map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {importedData.map((item) => (
                  <TableRow key={item.inventoryNumber}>
                    <TableCell>{item.subsidiary}</TableCell>
                    <TableCell>{item.objectName}</TableCell>
                    <TableCell>{item.objectCode}</TableCell>
                    <TableCell>
                      <input
                        type="date"
                        value={item.revisionDate}
                        onChange={(e) =>
                          handleRevisionDateChange(item.inventoryNumber, e)
                        }
                        style={{ width: "100%", padding: "8px" }}
                      />
                    </TableCell>
                    <TableCell>
                      <select
                        value={item.eventID}
                        onChange={(e) =>
                          handleEventIDChange(item.inventoryNumber, e)
                        }
                        style={{ width: "100%", padding: "8px" }}
                      >
                        <option value="">Выберите ID мероприятия</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <select
                        value={item.eventName}
                        onChange={(e) =>
                          handleEventNameChange(item.inventoryNumber, e)
                        }
                        style={{ width: "100%", padding: "8px" }}
                      >
                        <option value="">
                          Выберите наименование мероприятия
                        </option>
                        <option value="Нанесение инвентарных номеров">
                          Нанесение инвентарных номеров
                        </option>
                        <option value="Ликвидация">Ликвидация</option>
                        <option value="Техническое обслуживание">
                          Техническое обслуживание
                        </option>
                        <option value="Ремонт оборудования">
                          Ремонт оборудования
                        </option>
                        <option value="Замена оборудования">
                          Замена оборудования
                        </option>
                        <option value="Диагностика">Диагностика</option>
                        <option value="Проверка безопасности">
                          Проверка безопасности
                        </option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <textarea
                        value={item.note}
                        onChange={(e) =>
                          handleNoteChange(item.inventoryNumber, e)
                        }
                        style={{
                          width: "100%",
                          padding: "8px",
                          height: "80px",
                          resize: "none",
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.inventoryNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ padding: 20, width: "300px" }}>
            <form onSubmit={handleImport} style={{ marginTop: "20px" }}>
              {/* <div style={{ marginBottom: "16px" }}>
                <label>Дата ревизии:</label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: 10,
                  }}
                />
              </div> */}
              <div style={{ marginBottom: "16px" }}>
                <label htmlFor="region-select">Регион</label>
                <select
                  id="region-select"
                  value={region}
                  onChange={handleRegionChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                >
                  <option value="">Выберите регион</option>
                  <option value="1">Регион 1</option>
                  <option value="2">Регион 2</option>
                  <option value="3">Регион 3</option>
                </select>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label htmlFor="warehouse-select">Склад</label>
                <select
                  id="warehouse-select"
                  value={warehouse}
                  onChange={handleWarehouseChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                >
                  <option value="">Выберите склад</option>
                  <option value="A">Склад A</option>
                  <option value="B">Склад B</option>
                  <option value="C">Склад C</option>
                </select>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
                disabled={!region || !warehouse}
              >
                Импортировать
              </Button>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
                disabled={!region || !warehouse}
              >
                Фильтр
              </Button> */}
            </form>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default ImportComponent;
