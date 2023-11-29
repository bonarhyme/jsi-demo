package com.rtnconverter;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.rtnconverter.NativeConverterSpec;

public class ConverterModule extends NativeConverterSpec {

    public static String NAME = "RTNConverter";

    ConverterModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    @Override
    public void inchesToCentimeters(double inches, Promise promise) {
        promise.resolve(inches * 2.54);
    }

    @Override
    public void centimetersToInches(double centimeters, Promise promise) {
        promise.resolve(centimeters / 2.54);
    }

    @Override
    public void inchesToFeet(double inches, Promise promise) {
        promise.resolve(inches / 12);
    }

    @Override
    public void feetToInches(double feet, Promise promise) {
        promise.resolve(feet * 12);
    }

    @Override
    public void kilometersToMiles(double kilometers, Promise promise) {
        promise.resolve(kilometers / 1.609);
    }

    @Override
    public void milesToKilometers(double miles, Promise promise) {
        promise.resolve(miles * 1.609);
    }

    @Override
    public void feetToCentimeters(double feet, Promise promise) {
        promise.resolve(feet * 30.48);
    }

    @Override
    public void centimetersToFeet(double centimeters, Promise promise) {
        promise.resolve(centimeters / 30.48);
    }

    @Override
    public void yardsToMeters(double yards, Promise promise) {
        promise.resolve(yards / 1.094);
    }

    @Override
    public void metersToYards(double meters, Promise promise) {
        promise.resolve(meters * 1.094);
    }

    @Override
    public void milesToYards(double miles, Promise promise) {
        promise.resolve(miles * 1760);
    }

    @Override
    public void yardsToMiles(double yards, Promise promise) {
        promise.resolve(yards / 1760);
    }

    @Override
    public void feetToMeters(double feet, Promise promise) {
        promise.resolve(feet / 3.281);
    }

    @Override
    public void metersToFeet(double meters, Promise promise) {
        promise.resolve(meters * 3.281);
    }
}