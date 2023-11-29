import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import RTNCalculator from 'rtn-converter/js/NativeConverter';

const unitCombinationsConvertions = [
  'inchesToCentimeters',
  'centimetersToInches',
  'inchesToFeet',
  'feetToInches',
  'kilometersToMiles',
  'milesToKilometers',
  'feetToCentimeters',
  'centimetersToFeet',
  'yardsToMeters',
  'metersToYards',
  'milesToYards',
  'yardsToMiles',
  'feetToMeters',
  'metersToFeet',
] as const;

type UnitCombinationsConvertionsType =
  (typeof unitCombinationsConvertions)[number];

export const UnitConverter = () => {
  const [value, setValue] = useState<string>('0');
  const [result, setResult] = useState<number | undefined>();
  const [unitCombination, setUnitCombination] = useState<
    UnitCombinationsConvertionsType | undefined
  >();

  const calculate = useCallback(
    async (combination: UnitCombinationsConvertionsType) => {
      const convertedValue = await RTNCalculator?.[combination](Number(value));
      setUnitCombination(combination);
      setResult(convertedValue);
    },
    [value],
  );

  const camelCaseToWords = useCallback((word: string | undefined) => {
    if (!word) {
      return null;
    }
    const splitCamelCase = word.replace(/([A-Z])/g, ' $1');
    return splitCamelCase.charAt(0).toUpperCase() + splitCamelCase.slice(1);
  }, []);

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.header}>JSI Unit Converter</Text>

          <View style={styles.computationContainer}>
            <View style={styles.calcContainer}>
              <TextInput
                value={value}
                onChangeText={e => setValue(e)}
                placeholder="Enter value"
                style={styles.textInput}
                inputMode="numeric"
              />
              <Text style={styles.equalSign}>=</Text>
              <Text style={styles.result}>{result}</Text>
            </View>

            <Text style={styles.unitCombination}>
              {camelCaseToWords(unitCombination)}
            </Text>
          </View>

          <View style={styles.combinationContainer}>
            {unitCombinationsConvertions.map(combination => (
              <TouchableOpacity
                key={combination}
                onPress={() => calculate(combination)}
                style={styles.combinationButton}>
                <Text style={styles.combinationButtonText}>
                  {camelCaseToWords(combination)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  computationContainer: {
    gap: 10,
    width: '90%',
    height: 100,
    marginTop: 10,
  },
  calcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '50%',
    backgroundColor: 'lightgray',
    fontSize: 20,
    padding: 10,
  },
  equalSign: {
    fontSize: 30,
  },
  result: {
    width: '50%',
    height: 50,
    backgroundColor: 'gray',
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  unitCombination: {
    fontSize: 16,
  },
  combinationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  combinationButton: {
    backgroundColor: 'gray',
    width: '45%',
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  combinationButtonText: {
    color: 'white',
  },
});
