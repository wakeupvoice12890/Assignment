import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "ep-input",
  templateUrl: "./ep-input.component.html",
  styleUrls: ["./ep-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EpInputComponent),
      multi: true,
    },
  ],
})
export class EpInputComponent implements OnInit, ControlValueAccessor {
  @Input() type = "text";
  @Input() required = false;
  @Input() elementId: string;
  @Input() label: string;
  @Input() hasError = false;
  @Input() readonly = false;
  @Input() placeholder: string;
  @Input() dropSpecialCharacters = true;
  @Input() hasValue: boolean;
  @Input() labelSubDescription: any;
  @Input() maxLength: number;
  @Output() originalValue: EventEmitter<any> = new EventEmitter<any>();
  public formSecureInput: FormControl;
  public value = "";
  public applyMask: string;
  onChange: (value: string) => void;
  onTouched: () => void;
  constructor() {
    this.formSecureInput = new FormControl("");
  }

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.value = value ? value : "";
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(value): void {
    this.value = value;
  }
}
