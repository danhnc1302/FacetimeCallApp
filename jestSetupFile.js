jest.mock("@react-native-async-storage/async-storage", () => 
	jest.requireMock("@react-native-async-storage/jest/async-storage-mock")
);