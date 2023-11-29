import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  inchesToCentimeters(inches: number): Promise<number>;
  centimetersToInches(centimeters: number): Promise<number>;

  inchesToFeet(inches: number): Promise<number>;
  feetToInches(feet: number): Promise<number>;

  kilometersToMiles(kilometers: number): Promise<number>;
  milesToKilometers(miles: number): Promise<number>;

  feetToCentimeters(feet: number): Promise<number>;
  centimetersToFeet(centimeters: number): Promise<number>;

  yardsToMeters(yards: number): Promise<number>;
  metersToYards(meters: number): Promise<number>;

  milesToYards(miles: number): Promise<number>;
  yardsToMiles(yards: number): Promise<number>;

  feetToMeters(feet: number): Promise<number>;
  metersToFeet(meters: number): Promise<number>;
}

export default TurboModuleRegistry.get<Spec>('RTNConverter') as Spec | null;
