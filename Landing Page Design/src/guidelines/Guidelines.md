# TraininQ Guidelines

## Supported Workout Types

### Traditional Endurance Sports
- **Running**: Road running, track running, trail running
- **Cycling**: Road cycling, mountain biking, indoor cycling
- **Swimming**: Pool swimming, open water swimming
- **Triathlon**: Multi-sport combinations of swim, bike, run

### Hybrid Fitness & Functional Training
- **HYROX**: Hybrid fitness racing combining running with functional workout stations (SkiErg, sled push/pull, burpee broad jumps, rowing, farmers carry, sandbag lunges, wall balls)
- **ATHX**: Athletic hybrid training combining endurance and strength elements
- **CrossFit**: High-intensity functional fitness with varied movements
- **Functional Fitness**: General functional training programs
- **OCR (Obstacle Course Racing)**: Spartan Race, Tough Mudder, and similar obstacle-based events

### Strength & Conditioning
- **Weightlifting**: Olympic lifts, powerlifting, general strength training
- **HIIT**: High-Intensity Interval Training
- **Bodyweight Training**: Calisthenics, gymnastics movements
- **Circuit Training**: Timed stations with various exercises

### Other Sports
- **Rowing**: Indoor erg, outdoor rowing
- **Skiing**: Nordic skiing, ski ergometer training
- **Multi-Sport**: Duathlon, aquathlon, and custom combinations

## Workout Format Support

TraininQ can parse and convert workouts in any of these formats:

### Text-Based
- ChatGPT/AI-generated workout plans
- Coach's written instructions
- Training plan PDFs (via screenshot)
- Structured interval descriptions

### Social Media
- Instagram posts and captions
- YouTube video descriptions
- TikTok workout descriptions
- Twitter/X training posts

### Images
- Screenshot from any source
- Whiteboard workouts
- Training plan photos
- Workout card images

### Structured Data
- Intervals with time, distance, pace, or power targets
- Heart rate zones (Zone 1-5, % of max HR, or BPM ranges)
- RPE (Rate of Perceived Exertion) scales
- Power zones (watts or FTP %)
- Rest periods and recovery intervals
- Warmup and cooldown protocols

## Parsing Intelligence

Our AI understands:
- Multiple interval formats (time-based, distance-based, rep-based)
- Various notation styles (e.g., "5x400m @ 5K pace" or "5 rounds of 400m at race pace")
- Mixed unit systems (metric and imperial)
- Embedded instructions (e.g., "easy recovery", "build to threshold")
- Complex workout structures (ladders, pyramids, progressive intervals)
- Station-based workouts (HYROX format: 1K run + station + 1K run + station)
- EMOM (Every Minute On the Minute) and AMRAP (As Many Rounds As Possible) formats
- Supersets and compound exercises
- Timed holds and isometric work

## Device Compatibility

### Apple Watch
- Structured workouts sync via Apple Health
- Supports all workout types in Apple Fitness
- Custom intervals with alerts
- Heart rate zone guidance

### Garmin
- Structured workouts sync via Garmin Connect
- Supports running, cycling, swimming, strength, and cardio modes
- Custom intervals with step-by-step navigation
- Power and HR zone alerts

## Beta Features

Currently in beta testing:
- Real-time workout editing before sync
- Workout library organization and tagging
- Coach sharing and team features
- Integration with Strava, TrainingPeaks
- Voice-to-workout conversion
- Video timestamp parsing (extract workout from YouTube timestamps)
