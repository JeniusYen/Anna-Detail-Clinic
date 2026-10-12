# Image asset map

All 14 page image slots now use files inside `assets/images/`. Each slot has its own semantic filename so it can be replaced independently. Keep the current CSS image containers and cover cropping.

| Local file | Section | Source used |
|---|---|---|
| `hero-dental-care.jpg` | Hero | https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1200&q=80 |
| `why-anna-treatment-room.jpg` | WHY ANNA / main | https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80 |
| `why-anna-treatment-detail.jpg` | WHY ANNA / secondary | https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80 |
| `treatments-braces.jpg` | Treatments / Braces | https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80 |
| `treatments-clear-aligners.jpg` | Treatments / Clear Aligners | https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=80 |
| `treatments-implants-crowns.jpg` | Treatments / Implants & Crowns | https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80 |
| `patient-comfortable-consultation.jpg` | Patient Experience / Comfortable Consultation | https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80 |
| `patient-careful-clinical-work.jpg` | Patient Experience / Careful Clinical Work | https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80 |
| `patient-professional-standards.jpg` | Patient Experience / Professional Standards | https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80 |
| `patient-modern-clinic.jpg` | Patient Experience / Modern Clinic Setting | https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80 |
| `topics-braces-vs-aligners.jpg` | Helpful topics / Braces vs Clear Aligners | https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80 |
| `topics-crown-treatment.jpg` | Helpful topics / Crown | https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80 |
| `topics-family-clinic.jpg` | Helpful topics / Family Clinic | https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80 |
| `topics-consultation.jpg` | Helpful topics / Consultation | https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=900&q=80 |

## Restored missing images
- Careful Clinical Work: the original URL returned 404. Reused the existing treatment-detail photo.
- Professional Standards: the original URL returned 404. Reused the existing modern treatment-room photo.
- WHY ANNA secondary, Clear Aligners and Braces vs Clear Aligners: previously repaired references are now saved as permanent local files.

No images were generated or sourced from new image URLs. Some files share a photograph intentionally, allowing independent replacement by section. Google Fonts still loads externally; no image requires network access.
