<template>
  <div id="isc_4FG" eventproxy="isc_OpswiseFormSectionLayout_3" class="normal"
    onscroll="return isc_OpswiseFormSectionLayout_3.$lh()" data-isc-overflow-style="none">
    <div id="isc_4FH" eventproxy="isc_OpswiseFormSectionLayout_3">
      &nbsp;
      <div id="isc_4FI" eventproxy="isc_Label_26" onscroll="return isc_Label_26.$lh()" data-isc-overflow-style="none">
        <div id="isc_4FJ" eventproxy="isc_Label_26">
          <table role="presentation" cellspacing="0" cellpadding="0" width="645px" height="27px">
            <tbody>
              <tr>
                <td class="ucFormSectionLabelBold" style="padding: 5px" align="left" valign="middle">
                  Agent Details
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="isc_4FK" eventproxy="isc_OpswiseDynamicForm_3" class="normal"
        onscroll="return isc_OpswiseDynamicForm_3.$lh()" data-isc-overflow-style="none">
        <div id="isc_4FL" eventproxy="isc_OpswiseDynamicForm_3">
          <table role="presentation" id="isc_4FN" cellspacing="0" cellpadding="3" border="0">
            <colgroup>
              <col width="320" />
              <col width="321" />
            </colgroup>
            <tbody>
              <tr>
                <td style="
                    margin: 0px;
                    border: 0px;
                    padding: 0px;
                    background-image: none;
                    background-color: transparent;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                    font-size: 0px;
                    height: 0px;
                    overflow: hidden;
                    padding: 0px;
                  " class="">
                  <div style="overflow: hidden; height: 0px"></div>
                </td>
                <td style="
                    margin: 0px;
                    border: 0px;
                    padding: 0px;
                    background-image: none;
                    background-color: transparent;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                    font-size: 0px;
                    height: 0px;
                    overflow: hidden;
                    padding: 0px;
                  " class="">
                  <div style="overflow: hidden; height: 0px"></div>
                </td>
              </tr>
              <tr v-if="hasAgentCluster">
                <td align="left" valign="top" class="formCell" style="" height="41" id="isc_4FO">
                  <span id="isc_4FP" style="display: inline-block" class="formTitle" align="left"><label
                      id="isc_4FQ">Cluster</label></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_4FR" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <div id="isc_4FS" class="labelAnchor" style="min-width: 194px; white-space: nowrap"
                            tabindex="3311">
                            <span spriteviewport="true" style="
                                overflow: hidden;
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                vertical-align: middle;
                                margin-left: 4px;
                                margin-right: 3px;
                              " id="isc_4FT" eventpart="valueicon"><span style="
                                  vertical-align: top;
                                  display: inline-block;
                                  transform-origin: left top;
                                  width: 25px;
                                  height: 25px;
                                  transform: scale(0.96, 0.96);
                                " :class="taskNode.agentCluster
                                  ? 'checkboxTrue'
                                  : 'checkboxFalse'
                                  ">
                              </span></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top" class="formCell" style="" id="isc_4FU">
                  <span id="isc_4FV" style="display: inline-block" class="formTitle" align="left"><label id="isc_4FX"
                      for="isc_4FW">Agent</label>&nbsp;<span style="color: red">*</span></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_4FY" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <table role="presentation" id="isc_4FZ" cellpadding="0" cellspacing="0"
                            style="cursor: default; width: 290px" class="selectItemLiteControl">
                            <tbody>
                              <tr>
                                <td style="white-space: nowrap">
                                  <span name="agent" id="isc_4GE" handlenativeevents="false" spellcheck="true"
                                    oninput="isc_OpswiseReferenceItem_54._handleInput()"
                                    onselect="if (window.isc_OpswiseReferenceItem_54 == null) return;isc_OpswiseReferenceItem_54.$1162()"
                                    autocomplete="OFF" class="selectItemLiteText text uc-field"
                                    style="width: 262px; height: 16px" tabindex="3325">
                                    {{ taskNode.agent }}
                                  </span>
                                </td>
                                <td id="isc_4G1" class="selectItemPickerIcon" style="font-size: 22px">
                                  <span role="button" id="isc_4G2" style="
                                      margin-left: 0px;
                                      display: block;
                                      height: 22px;
                                    " tabindex="-1" handlenativeevents="false"><span spriteviewport="true" style="
                                        overflow: hidden;
                                        display: inline-block;
                                        width: 11px;
                                        height: 22px;
                                        vertical-align: middle;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        margin-left: 0px;
                                        display: block;
                                        cursor: pointer;
                                        -webkit-touch-callout: none;
                                      " id="isc_4G3"><span style="
                                          vertical-align: top;
                                          display: inline-block;
                                          transform-origin: left top;
                                          width: 16px;
                                          height: 32px;
                                          background-position: 0px 12px;
                                          transform: scale(0.6875, 0.6875);
                                        " class="comboBoxItemPicker"></span></span></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td valign="middle" style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                            line-height: 18px;
                          " class="formCell" id="isc_4G4">
                          <table role="presentation" cellpadding="0" cellspacing="0" margin="0" style="">
                            <tbody>
                              <tr>
                                <td>
                                  <span role="button" id="isc_4AP" style="
                                      margin-left: 0px;
                                      display: block;
                                      height: 22px;
                                    " tabindex="3314" handlenativeevents="false"><img
                                      src="https://s0299035.su.dk:8443/uc/skins/Light/images/uc/listIcon.png" width="21"
                                      height="22" align="absmiddle" style="
                                        vertical-align: middle;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        margin-left: 3px;
                                        display: block;
                                        cursor: pointer;
                                        -webkit-touch-callout: none;
                                      " id="isc_4G5" border="0" suppress="TRUE" draggable="true" /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td align="left" valign="top" class="formCell" style="" height="41" id="isc_4G6">
                  <span id="isc_4G7" style="display: inline-block" class="formTitle" align="left"><label
                      id="isc_4G8">Agent Variable</label></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_4G9" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <div id="isc_4GA" class="labelAnchor" style="min-width: 194px; white-space: nowrap"
                            tabindex="3316">
                            <span spriteviewport="true" style="
                                overflow: hidden;
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                vertical-align: middle;
                                margin-left: 4px;
                                margin-right: 3px;
                              " id="isc_4GB" eventpart="valueicon"><span style="
                                  vertical-align: top;
                                  display: inline-block;
                                  transform-origin: left top;
                                  width: 25px;
                                  height: 25px;
                                  transform: scale(0.96, 0.96);
                                " class="checkboxFalse"></span></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr v-if="hasAgentCluster && taskNode.agentCluster.trim()">
                <td align="left" valign="top" class="formCell" style="" id="isc_7LV">
                  <span id="isc_7LW" style="display: inline-block" class="formTitle" align="left"><label id="isc_7LY"
                      for="isc_7LX">Agent Cluster</label>&nbsp;<span style="color: red">*</span></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_7LZ" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <table role="presentation" id="isc_7M0" cellpadding="0" cellspacing="0"
                            style="cursor: default; width: 290px" class="selectItemLiteControl">
                            <tbody>
                              <tr>
                                <td style="white-space: nowrap">
                                  <input type="TEXT" name="agentCluster" id="isc_7LX" handlenativeevents="false"
                                    spellcheck="true" oninput="isc_OpswiseReferenceItem_35._handleInput()"
                                    onselect="if (window.isc_OpswiseReferenceItem_35 == null) return;isc_OpswiseReferenceItem_35.$1162()"
                                    autocomplete="OFF" class="selectItemLiteText" style="width: 262px; height: 16px"
                                    tabindex="4174" />
                                </td>
                                <td id="isc_7M2" class="selectItemPickerIcon" style="font-size: 22px">
                                  <span role="button" id="isc_7M3" style="
                                      margin-left: 0px;
                                      display: block;
                                      height: 22px;
                                    " tabindex="-1" handlenativeevents="false"><span spriteviewport="true" style="
                                        overflow: hidden;
                                        display: inline-block;
                                        width: 11px;
                                        height: 22px;
                                        vertical-align: middle;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        margin-left: 0px;
                                        display: block;
                                        cursor: pointer;
                                        -webkit-touch-callout: none;
                                      " id="isc_7M4"><span style="
                                          vertical-align: top;
                                          display: inline-block;
                                          transform-origin: left top;
                                          width: 16px;
                                          height: 32px;
                                          background-position: 0px 12px;
                                          transform: scale(0.6875, 0.6875);
                                        " class="comboBoxItemPicker uc-field"></span>{{ taskNode.agentCluster
                                        }}</span></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td valign="middle" style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                            line-height: 18px;
                          " class="formCell" id="isc_7M5">
                          <table role="presentation" cellpadding="0" cellspacing="0" margin="0" style="">
                            <tbody>
                              <tr>
                                <td>
                                  <span role="button" id="isc_781" style="
                                      margin-left: 0px;
                                      display: block;
                                      height: 22px;
                                    " tabindex="4175" handlenativeevents="false"><img
                                      src="https://s0299035.su.dk:8443/uc/skins/Light/images/uc/listIcon.png" width="21"
                                      height="22" align="absmiddle" style="
                                        vertical-align: middle;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        margin-left: 3px;
                                        display: block;
                                        cursor: pointer;
                                        -webkit-touch-callout: none;
                                      " id="isc_7M6" border="0" suppress="TRUE" draggable="true" /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td align="left" valign="top" class="formCell" style="" height="41" id="isc_7M7"
                  v-if="taskNode.agentCluster">
                  <span id="isc_7M8" style="display: inline-block" class="formTitle" align="left"><label
                      id="isc_7M9">Agent Cluster Variable</label></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_7MA" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <div id="isc_7MB" class="labelAnchor" style="min-width: 194px; white-space: nowrap"
                            tabindex="4177">
                            <span spriteviewport="true" style="
                                overflow: hidden;
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                vertical-align: middle;
                                margin-left: 4px;
                                margin-right: 3px;
                              " id="isc_7MC" eventpart="valueicon"><span style="
                                  vertical-align: top;
                                  display: inline-block;
                                  transform-origin: left top;
                                  width: 25px;
                                  height: 25px;
                                  transform: scale(0.96, 0.96);
                                " :class="taskNode.agentCluster
                                  ? 'checkboxTrue'
                                  : 'checkboxFalse'
                                  "></span></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top" class="formCell" style="" id="isc_4GC">
                  <span id="isc_4GD" style="display: inline-block" class="formTitle" align="left"><label id="isc_4GF"
                      for="isc_4GE">Credentials</label></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_4GG" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <table role="presentation" id="isc_4GH" cellpadding="0" cellspacing="0"
                            style="cursor: default; width: 290px" class="selectItemLiteControl">
                            <tbody>
                              <tr>
                                <td style="white-space: nowrap">
                                  <span type="TEXT" name="credentials" id="isc_4GE" handlenativeevents="false"
                                    spellcheck="true" autocomplete="OFF" class="selectItemLiteText uc-field"
                                    style="width: 262px; height: 16px" tabindex="3325">
                                    {{ taskNode.credentials }}
                                  </span>
                                </td>
                                <td id="isc_4GJ" class="selectItemPickerIcon" style="font-size: 22px">
                                  <span role="button" id="isc_4GK" style="
                                      margin-left: 0px;
                                      display: block;
                                      height: 22px;
                                    " tabindex="-1" handlenativeevents="false"><span spriteviewport="true" style="
                                        overflow: hidden;
                                        display: inline-block;
                                        width: 11px;
                                        height: 22px;
                                        vertical-align: middle;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        margin-left: 0px;
                                        display: block;
                                        cursor: pointer;
                                        -webkit-touch-callout: none;
                                      " id="isc_4GL"><span style="
                                          vertical-align: top;
                                          display: inline-block;
                                          transform-origin: left top;
                                          width: 16px;
                                          height: 32px;
                                          background-position: 0px 12px;
                                          transform: scale(0.6875, 0.6875);
                                        " class="comboBoxItemPicker"></span></span></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td valign="middle" style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                            line-height: 18px;
                          " class="formCell" id="isc_4GM">
                          <table role="presentation" cellpadding="0" cellspacing="0" margin="0" style="">
                            <tbody>
                              <tr>
                                <td>
                                  <span role="button" id="isc_4AS" style="
                                      margin-left: 0px;
                                      display: block;
                                      height: 22px;
                                    " tabindex="3326" handlenativeevents="false"><img
                                      src="https://s0299035.su.dk:8443/uc/skins/Light/images/uc/listIcon.png" width="21"
                                      height="22" align="absmiddle" style="
                                        vertical-align: middle;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                        margin-left: 3px;
                                        display: block;
                                        cursor: pointer;
                                        -webkit-touch-callout: none;
                                      " id="isc_4GN" border="0" suppress="TRUE" draggable="true" /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td align="left" valign="top" class="formCell" style="" height="41" id="isc_4GO">
                  <span id="isc_4GP" style="display: inline-block" class="formTitle" align="left"><label
                      id="isc_4GQ">Credentials Variable</label></span><br />
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" id="isc_4GR" style="
                      margin: 0px;
                      border: 0px;
                      padding: 0px;
                      background-image: none;
                      background-color: transparent;
                      -webkit-box-shadow: none;
                      box-shadow: none;
                      white-space: normal;
                    " class="formCell">
                    <tbody>
                      <tr>
                        <td style="
                            margin: 0px;
                            border: 0px;
                            padding: 0px;
                            background-image: none;
                            background-color: transparent;
                            -webkit-box-shadow: none;
                            box-shadow: none;
                          " valign="middle">
                          <div id="isc_4GS" class="labelAnchor" style="min-width: 194px; white-space: nowrap"
                            tabindex="3328">
                            <span spriteviewport="true" style="
                                overflow: hidden;
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                vertical-align: middle;
                                margin-left: 4px;
                                margin-right: 3px;
                              " id="isc_4GT" eventpart="valueicon"><span style="
                                  vertical-align: top;
                                  display: inline-block;
                                  transform-origin: left top;
                                  width: 25px;
                                  height: 25px;
                                  transform: scale(0.96, 0.96);
                                " class="checkboxFalse"></span></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top" class="formCell" style="" height="41" id="isc_4GU">
                  <span id="isc_4GV" style="display: inline-block" class="formTitle" align="left"><label id="isc_4GW">Run
                      as sudo</label></span><br />
                  <span style="
                      vertical-align: top;
                      display: inline-block;
                      transform-origin: left top;
                      width: 25px;
                      height: 25px;
                      transform: scale(0.96, 0.96);
                    " :class="taskNode.runAsSudo ? 'checkboxTrue' : 'checkboxFalse'">
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Task } from "@/types/interfaces";
import { computed, defineProps } from "vue";

const props = defineProps({
  taskNode: {
    type: Object as () => Task,
    default: () => {
      return {} as Task;
    },
  },
});

const hasAgentCluster = computed(() => {
  return 'agentCluster' in props.taskNode && props.taskNode.agentCluster;
})
</script>
